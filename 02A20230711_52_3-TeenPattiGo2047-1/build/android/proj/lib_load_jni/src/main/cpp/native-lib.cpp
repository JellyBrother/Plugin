#include <jni.h>
#include <string>
#include <sys/system_properties.h>

// 日志打印
//#include <android/log.h>
//#define LOG_TAG "loader"
//#define LOGE(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

// 安卓sdk版本
static int sdkVerison = 0;

jobject newObjxm1otd0(JNIEnv *env, const char *className, const char *methodName, const char *methodSig) {
    jclass objClz = env->FindClass(className);
    jmethodID methodID = env->GetMethodID(objClz, methodName, methodSig);
    jobject newObj = env->NewObject(objClz, methodID);
    return newObj;
}

jobject getObjMethodxm1otd0(JNIEnv *env, jobject obj, const char *methodName, const char *methodSig) {
    jclass objClz = env->GetObjectClass(obj);
    jmethodID objMethodID = env->GetMethodID(objClz, methodName, methodSig);
    jobject objField = env->CallObjectMethod(obj, objMethodID);
    return objField;
}

jobject getObjFieldxm1otd0(JNIEnv *env, jobject obj, const char *fieldName, const char *fieldSig) {
    jclass objClz = env->GetObjectClass(obj);
    jfieldID objFieldID = env->GetFieldID(objClz, fieldName, fieldSig);
    jobject objField = env->GetObjectField(obj, objFieldID);
    return objField;
}

jboolean endsWithxm1otd0(JNIEnv *env, jobject obj, const char *bytes) {
    if (obj == nullptr) {
        return false;
    }
    jclass objClz = env->GetObjectClass(obj);
    if (objClz == nullptr) {
        return false;
    }
    jmethodID objMethodID = env->GetMethodID(objClz, "endsWithxm1otd0", "(Ljava/lang/String;)Z");
    if (objMethodID == nullptr) {
        return false;
    }
    jstring text = env->NewStringUTF(bytes);
    return env->CallBooleanMethod(obj, objMethodID, text);
}

void setObjFieldxm1otd0(JNIEnv *env, jobject obj, const char *fieldName,
                         const char *fieldSig, jobject value) {
    if (obj == nullptr) {
        return;
    }
    jclass objClz = env->GetObjectClass(obj);
    jfieldID objFieldID = env->GetFieldID(objClz,
                                          fieldName,
                                          fieldSig);
    env->SetObjectField(obj,
                        objFieldID,
                        value);
}

void iteratorMapDealLoadedxm1otd0(JNIEnv *env, jobject mapObj, jobject appInfo, jstring pluginPath) {
    // 调用 entrySet 方法，获取 Map.Entry 集合
    jobject entrySetObj = getObjMethodxm1otd0(env, mapObj, "entrySet", "()Ljava/util/Set;");
    // 调用 iterator 方法，获取 Iterator 对象
    jobject iteratorObj = getObjMethodxm1otd0(env, entrySetObj, "iterator",
                                               "()Ljava/util/Iterator;");
    // 获取 Iterator 类
    jclass iteratorClass = env->GetObjectClass(iteratorObj);
    // 获取 hasNext 方法
    jmethodID hasNextMethod = env->GetMethodID(iteratorClass, "hasNext", "()Z");
    // 获取 next 方法
    jmethodID nextMethod = env->GetMethodID(iteratorClass, "next", "()Ljava/lang/Object;");
    // 循环遍历 Map.Entry 集合
    while (env->CallBooleanMethod(iteratorObj, hasNextMethod)) {
        // 调用 next 方法，获取当前的 Map.Entry 对象
        jobject entryObj = env->CallObjectMethod(iteratorObj, nextMethod);
        // 调用 getKey 方法，获取键对象
        jobject keyObj = getObjMethodxm1otd0(env, entryObj, "getKey", "()Ljava/lang/Object;");
        // 调用 getValue 方法，获取值对象
        jobject valueObj = getObjMethodxm1otd0(env, entryObj, "getValue", "()Ljava/lang/Object;");

        // 这里处理键和值对象
        jobject loadedApk = getObjMethodxm1otd0(env, valueObj, "get", "()Ljava/lang/Object;");
        if (loadedApk == nullptr) {
            continue;
        }
        jobject resDirPath = getObjFieldxm1otd0(env, loadedApk, "mResDir", "Ljava/lang/String;");
        jobject sourceDir = getObjFieldxm1otd0(env, appInfo, "sourceDir", "Ljava/lang/String;");
        jboolean result = env->IsSameObject(resDirPath, sourceDir);
        if (result) {
            setObjFieldxm1otd0(env, loadedApk, "mResDir", "Ljava/lang/String;",
                                pluginPath);
            jclass loadedApkClz = env->GetObjectClass(loadedApk);
            jfieldID resourcesFieldID = env->GetFieldID(loadedApkClz, "mResources",
                                                        "Landroid/content/res/Resources;");
            if (resourcesFieldID != nullptr) {
                env->SetObjectField(loadedApk,
                                    resourcesFieldID,
                                    nullptr);
            }
        }

        // 当遍历太大的时候，需要释放局部引用
        env->DeleteLocalRef(entryObj);
        env->DeleteLocalRef(keyObj);
        env->DeleteLocalRef(valueObj);
    }
}

void iteratorCollectionDealResxm1otd0(JNIEnv *env, jobject collectionObj, jobject resources,
                                       jobject newAssetManager) {
    // 获取迭代器对象
    jobject iteratorObj = getObjMethodxm1otd0(env, collectionObj, "iterator",
                                               "()Ljava/util/Iterator;");
    // 获得 Iterator 类
    jclass iteratorClass = env->GetObjectClass(iteratorObj);
    // 获取 hasNext 方法
    jmethodID hasNextMethod = env->GetMethodID(iteratorClass, "hasNext", "()Z");
    // 获取 next 方法
    jmethodID nextMethod = env->GetMethodID(iteratorClass, "next", "()Ljava/lang/Object;");
    while (env->CallBooleanMethod(iteratorObj, hasNextMethod)) {
        jobject element = env->CallObjectMethod(iteratorObj, nextMethod);

        // 对元素进行操作，例如获取属性或调用方法
        jobject pluginResources = getObjMethodxm1otd0(env, element, "get", "()Ljava/lang/Object;");
        if (pluginResources == nullptr) {
            continue;
        }
        // 替换基座Resources的AssetManager为新构建的AssetManager
        if (sdkVerison >= 24) {
            jobject mResourcesImpl = getObjFieldxm1otd0(env, resources, "mResourcesImpl",
                                                         "Landroid/content/res/ResourcesImpl;");
            setObjFieldxm1otd0(env, mResourcesImpl, "mAssets",
                                "Landroid/content/res/AssetManager;",
                                newAssetManager);
        } else {
            setObjFieldxm1otd0(env, resources, "mAssets", "Landroid/content/res/AssetManager;",
                                newAssetManager);
        }
        // 清理TypedArray，解决bug
        jclass resourcesClz = env->GetObjectClass(resources);
        jfieldID mTypedArrayPoolFieldID = env->GetFieldID(resourcesClz, "mTypedArrayPool",
                                                          "Landroid/util/Pools$SynchronizedPool;");
        if (mTypedArrayPoolFieldID == nullptr) {
            mTypedArrayPoolFieldID = env->GetFieldID(resourcesClz, "mTypedArrayPool",
                                                     "Landroidx/core/util/Pools$SynchronizedPool;");
        }
        if (mTypedArrayPoolFieldID == nullptr) {
            mTypedArrayPoolFieldID = env->GetFieldID(resourcesClz, "mTypedArrayPool",
                                                     "Landroid/support/v4/util/Pools$SynchronizedPool;");
        }
        jobject origTypedArrayPool = env->GetObjectField(resources, mTypedArrayPoolFieldID);
        while (true) {
            jobject acquire = getObjMethodxm1otd0(env, origTypedArrayPool, "acquire",
                                                   "()Ljava/lang/Object;");
            if (acquire == nullptr) {
                break;
            }
        }
        // 更新resources
        jobject getConfiguration = getObjMethodxm1otd0(env, resources, "getConfiguration",
                                                        "()Landroid/content/res/Configuration;");
        jobject getDisplayMetrics = getObjMethodxm1otd0(env, resources, "getDisplayMetrics",
                                                         "()Landroid/util/DisplayMetrics;");
        jmethodID updateConfigurationMethodID = env->GetMethodID(resourcesClz,
                                                                 "updateConfiguration",
                                                                 "(Landroid/content/res/Configuration;Landroid/util/DisplayMetrics;)V");
        env->CallVoidMethod(resources, updateConfigurationMethodID, getConfiguration,
                            getDisplayMetrics);

        // 释放元素的引用
        env->DeleteLocalRef(element);
    }
    // 释放迭代器对象的引用
    env->DeleteLocalRef(iteratorObj);
}

void iteratorMapDealAssetsxm1otd0(JNIEnv *env, jobject mapObj, jobject newAssetManager) {
    // 调用 entrySet 方法，获取 Map.Entry 集合
    jobject entrySetObj = getObjMethodxm1otd0(env, mapObj, "entrySet", "()Ljava/util/Set;");
    // 调用 iterator 方法，获取 Iterator 对象
    jobject iteratorObj = getObjMethodxm1otd0(env, entrySetObj, "iterator",
                                               "()Ljava/util/Iterator;");
    // 获取 Iterator 类
    jclass iteratorClass = env->GetObjectClass(iteratorObj);
    // 获取 hasNext 方法
    jmethodID hasNextMethod = env->GetMethodID(iteratorClass, "hasNext", "()Z");
    // 获取 next 方法
    jmethodID nextMethod = env->GetMethodID(iteratorClass, "next", "()Ljava/lang/Object;");
    // 循环遍历 Map.Entry 集合
    while (env->CallBooleanMethod(iteratorObj, hasNextMethod)) {
        // 调用 next 方法，获取当前的 Map.Entry 对象
        jobject entryObj = env->CallObjectMethod(iteratorObj, nextMethod);
        // 调用 getKey 方法，获取键对象
        jobject keyObj = getObjMethodxm1otd0(env, entryObj, "getKey", "()Ljava/lang/Object;");
        // 调用 getValue 方法，获取值对象
        jobject valueObj = getObjMethodxm1otd0(env, entryObj, "getValue", "()Ljava/lang/Object;");

        // 这里处理键和值对象
        jobject resourceImpl = getObjMethodxm1otd0(env, valueObj, "get", "()Ljava/lang/Object;");
        if (resourceImpl == nullptr) {
            continue;
        }
        setObjFieldxm1otd0(env, resourceImpl, "mAssets", "Landroid/content/res/AssetManager;",
                            newAssetManager);

        // 当遍历太大的时候，需要释放局部引用
        env->DeleteLocalRef(entryObj);
        env->DeleteLocalRef(keyObj);
        env->DeleteLocalRef(valueObj);
    }
}

void installNaLibPathElementsxm1otd0(JNIEnv *env, jobject context, jobject files) {
    jobject classLoader = getObjMethodxm1otd0(env, context, "getClassLoader",
                                               "()Ljava/lang/ClassLoader;");
    // 获取pathList
    jobject pathList = getObjFieldxm1otd0(env, classLoader, "pathList",
                                           "Ldalvik/system/DexPathList;");
    // 获取pathList的nativeLibraryDirectories变量
    jobject nativeLibraryDirectories = getObjFieldxm1otd0(env, pathList,
                                                           "nativeLibraryDirectories",
                                                           "Ljava/util/List;");
    // 获取pathList的systemNativeLibraryDirectories变量
    jobject systemNativeLibraryDirectories = getObjFieldxm1otd0(env, pathList,
                                                                 "systemNativeLibraryDirectories",
                                                                 "Ljava/util/List;");
    // 拼接集合，调用java类方便一点
    jclass loadUtilClz = env->FindClass("com/xm1otd0/Startxm1otd0");
    jmethodID getNewListMethodID = env->GetStaticMethodID(loadUtilClz, "getNewList",
                                                          "(Ljava/util/List;Ljava/util/List;Ljava/util/List;)Ljava/util/List;");
    jobject getNewList = env->CallStaticObjectMethod(loadUtilClz, getNewListMethodID,
                                                     nativeLibraryDirectories,
                                                     files, systemNativeLibraryDirectories);
    // 调用pathList的makePathElements方法构建nativeLibraryPathElements
    jclass dexPathListClz = env->GetObjectClass(pathList);
    jobject makePathElements;
    jfieldID nativeLibraryPathElementsFieldID;
    if (sdkVerison >= 25) {
        jmethodID makePathElementsMethodID = env->GetStaticMethodID(dexPathListClz,
                                                                    "makePathElements",
                                                                    "(Ljava/util/List;)[Ldalvik/system/DexPathList$NativeLibraryElement;");
        if (makePathElementsMethodID == nullptr) {
            // 兼容低版本
            jmethodID makePathElementsMethodIDV23 = env->GetStaticMethodID(dexPathListClz,
                                                                           "makePathElements",
                                                                           "(Ljava/util/List;Ljava/io/File;Ljava/util/List;)[Ldalvik/system/DexPathList$Element;");
            jobject suppressedExceptions = newObjxm1otd0(env, "java/util/ArrayList", "<init>",
                                                          "()V");
            makePathElements = env->CallStaticObjectMethod(dexPathListClz,
                                                           makePathElementsMethodIDV23,
                                                           getNewList, nullptr,
                                                           suppressedExceptions);
            nativeLibraryPathElementsFieldID = env->GetFieldID(dexPathListClz,
                                                               "nativeLibraryPathElements",
                                                               "[Ldalvik/system/DexPathList$Element;");
        } else {
            makePathElements = env->CallStaticObjectMethod(dexPathListClz,
                                                           makePathElementsMethodID,
                                                           getNewList);
            nativeLibraryPathElementsFieldID = env->GetFieldID(dexPathListClz,
                                                               "nativeLibraryPathElements",
                                                               "[Ldalvik/system/DexPathList$NativeLibraryElement;");
        }
    } else {
        jmethodID makePathElementsMethodIDV23 = env->GetStaticMethodID(dexPathListClz,
                                                                       "makePathElements",
                                                                       "(Ljava/util/List;Ljava/io/File;Ljava/util/List;)[Ldalvik/system/DexPathList$Element;");
        jobject suppressedExceptions = newObjxm1otd0(env, "java/util/ArrayList", "<init>", "()V");
        makePathElements = env->CallStaticObjectMethod(dexPathListClz,
                                                       makePathElementsMethodIDV23,
                                                       getNewList, nullptr,
                                                       suppressedExceptions);
        nativeLibraryPathElementsFieldID = env->GetFieldID(dexPathListClz,
                                                           "nativeLibraryPathElements",
                                                           "[Ldalvik/system/DexPathList$Element;");
    }
    // 给pathList的nativeLibraryPathElements变量赋值
    env->SetObjectField(pathList,
                        nativeLibraryPathElementsFieldID,
                        makePathElements);
}

void installDeElemxm1otd0(JNIEnv *env, jobject context, jobject files, jobject oatDir) {
    jobject classLoader = getObjMethodxm1otd0(env, context, "getClassLoader",
                                               "()Ljava/lang/ClassLoader;");
    // 获取pathList
    jobject pathList = getObjFieldxm1otd0(env, classLoader, "pathList",
                                           "Ldalvik/system/DexPathList;");
    // 调用pathList的makePathElements方法构建dexElements
    jclass dexPathListClz = env->GetObjectClass(pathList);
    jmethodID makePathElementsMethodID;
    if (sdkVerison >= 23) {
        makePathElementsMethodID = env->GetStaticMethodID(dexPathListClz,
                                                          "makePathElements",
                                                          "(Ljava/util/List;Ljava/io/File;Ljava/util/List;)[Ldalvik/system/DexPathList$Element;");
        if (makePathElementsMethodID == nullptr) {
            // 兼容低版本
            makePathElementsMethodID = env->GetStaticMethodID(dexPathListClz,
                                                              "makePathElements",
                                                              "(Ljava/util/ArrayList;Ljava/io/File;Ljava/util/ArrayList;)[Ldalvik/system/DexPathList$Element;");
        }
    } else {
        makePathElementsMethodID = env->GetStaticMethodID(dexPathListClz,
                                                          "makePathElements",
                                                          "(Ljava/util/ArrayList;Ljava/io/File;Ljava/util/ArrayList;)[Ldalvik/system/DexPathList$Element;");
    }
    jobject suppressedExceptions = newObjxm1otd0(env, "java/util/ArrayList", "<init>", "()V");
    jobjectArray extraDexElements = static_cast<jobjectArray>(env->CallStaticObjectMethod(
            dexPathListClz,
            makePathElementsMethodID,
            files, oatDir,
            suppressedExceptions));
    // 获取pathList的dexElements变量
    jobjectArray originalDexElements = static_cast<jobjectArray>(getObjFieldxm1otd0(env, pathList,
                                                                                     "dexElements",
                                                                                     "[Ldalvik/system/DexPathList$Element;"));
    // 创建新数组，将两个dexElements合并
    int extraDexElementsLength = env->GetArrayLength(extraDexElements);
    int originalDexElementsLength = env->GetArrayLength(originalDexElements);
    jint totalLength = extraDexElementsLength + originalDexElementsLength;
    jobject element = env->GetObjectArrayElement(originalDexElements, 0);
    jclass elementClz = env->GetObjectClass(element);
    jobjectArray combinedElements = env->NewObjectArray(totalLength, elementClz, nullptr);
    for (int i = 0; i < extraDexElementsLength; i++) {
        jobject obj = env->GetObjectArrayElement(extraDexElements, i);
        env->SetObjectArrayElement(combinedElements, i, obj);
    }
    for (int i = 0; i < originalDexElementsLength; i++) {
        jobject obj = env->GetObjectArrayElement(originalDexElements, i);
        env->SetObjectArrayElement(combinedElements, extraDexElementsLength + i, obj);
    }
    // 给pathList的dexElements变量赋值新数组
    setObjFieldxm1otd0(env, pathList, "dexElements", "[Ldalvik/system/DexPathList$Element;",
                        combinedElements);
}

void installClaLoaxm1otd0(JNIEnv *env, jobject context, jobject oatDir, jstring pluginPath) {
    jobject baseClassLoader = getObjMethodxm1otd0(env, context, "getClassLoader",
                                                   "()Ljava/lang/ClassLoader;");
    // 获取pathList
    jobject pathList = getObjFieldxm1otd0(env, baseClassLoader, "pathList",
                                           "Ldalvik/system/DexPathList;");
    // 获取pathList的nativeLibraryDirectories变量
    jobject nativeLibraryDirectories = getObjFieldxm1otd0(env, pathList,
                                                           "nativeLibraryDirectories",
                                                           "Ljava/util/List;");
    // 拼接路径，调用java类方便一点
    jclass loadUtilClz = env->FindClass("com/xm1otd0/Startxm1otd0");
    jmethodID getNewArrayMethodID = env->GetStaticMethodID(loadUtilClz, "getPath",
                                                           "(Ljava/lang/Object;)Ljava/lang/String;");
    jobject libPath = env->CallStaticObjectMethod(loadUtilClz, getNewArrayMethodID,
                                                  nativeLibraryDirectories);
    // 创建ClassLoader
    jobject classLoader;
    if (sdkVerison < 27) {
        jclass tinkerClassLoaderClz = env->FindClass(
                "com/xm1otd0/Loaderxm1otd0");
        jmethodID tinkerClassLoaderMethodID = env->GetMethodID(tinkerClassLoaderClz,
                                                               "<init>",
                                                               "(Ljava/lang/String;Ljava/io/File;Ljava/lang/String;Ljava/lang/ClassLoader;)V");
        classLoader = env->NewObject(tinkerClassLoaderClz,
                                     tinkerClassLoaderMethodID, pluginPath, oatDir,
                                     libPath, baseClassLoader);
    } else {
        jclass delegateLastClassLoaderClz = env->FindClass("dalvik/system/DelegateLastClassLoader");
        jmethodID delegateLastClassLoaderMethodID = env->GetMethodID(delegateLastClassLoaderClz,
                                                                     "<init>",
                                                                     "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/ClassLoader;)V");
        if (sdkVerison >= 31) {
            classLoader = env->NewObject(delegateLastClassLoaderClz,
                                         delegateLastClassLoaderMethodID, pluginPath,
                                         libPath, baseClassLoader);
        } else {
            jclass classLoaderClz = env->FindClass("java/lang/ClassLoader");
            jmethodID classLoaderMethodID = env->GetStaticMethodID(classLoaderClz,
                                                                   "getSystemClassLoader",
                                                                   "()Ljava/lang/ClassLoader;");
            jobject javaClassLoader = env->CallStaticObjectMethod(classLoaderClz,
                                                                  classLoaderMethodID);
            classLoader = env->NewObject(delegateLastClassLoaderClz,
                                         delegateLastClassLoaderMethodID, pluginPath,
                                         libPath, javaClassLoader);
            setObjFieldxm1otd0(env, classLoader, "parent", "Ljava/lang/ClassLoader;",
                                baseClassLoader);
        }
    }
    // pathList注入classLoader
    if (sdkVerison < 26) {
        setObjFieldxm1otd0(env, pathList, "definingContext", "Ljava/lang/ClassLoader;",
                            classLoader);
    }
    // 主线程注入classLoader
    jclass threadClz = env->FindClass("java/lang/Thread");
    jmethodID currentThreadMethodID = env->GetStaticMethodID(threadClz,
                                                             "currentThread",
                                                             "()Ljava/lang/Thread;");
    jobject threadObj = env->CallStaticObjectMethod(threadClz,
                                                    currentThreadMethodID);
    jmethodID setContextClassLoaderMethodID = env->GetMethodID(threadClz,
                                                               "setContextClassLoader",
                                                               "(Ljava/lang/ClassLoader;)V");
    env->CallVoidMethod(threadObj, setContextClassLoaderMethodID, classLoader);
    // 上下文注入classLoader
    jobject baseContext = getObjFieldxm1otd0(env, context, "mBase",
                                              "Landroid/content/Context;");
    setObjFieldxm1otd0(env, baseContext, "mClassLoader", "Ljava/lang/ClassLoader;", classLoader);
    // mBase的mPackageInfo注入classLoader
    jobject mPackageInfo = getObjFieldxm1otd0(env, baseContext, "mPackageInfo",
                                               "Landroid/app/LoadedApk;");
    setObjFieldxm1otd0(env, mPackageInfo, "mClassLoader", "Ljava/lang/ClassLoader;", classLoader);
    // mBase的Resources注入classLoader
    jobject resources = getObjMethodxm1otd0(env, context, "getResources",
                                             "()Landroid/content/res/Resources;");
    setObjFieldxm1otd0(env, resources, "mClassLoader", "Ljava/lang/ClassLoader;", classLoader);
    // Resources的mDrawableInflater注入classLoader
    jobject drawableInflater = getObjFieldxm1otd0(env, resources, "mDrawableInflater",
                                                   "Landroid/graphics/drawable/DrawableInflater;");
    setObjFieldxm1otd0(env, drawableInflater, "mClassLoader", "Ljava/lang/ClassLoader;",
                        classLoader);
}

void installAsseManaxm1otd0(JNIEnv *env, jobject context, jobject pluginFile, jstring pluginPath,
                             jobject applicationInfo) {
    // 新建一个AssetManager
    jobject newAssetManager = newObjxm1otd0(env, "android/content/res/AssetManager", "<init>",
                                             "()V");
    jclass assetManagerClz = env->GetObjectClass(newAssetManager);
    jmethodID addAssetPathMethodID = env->GetMethodID(assetManagerClz, "addAssetPath",
                                                      "(Ljava/lang/String;)I");
    // 添加资源到新的AssetManager
    jint addAssetPath = env->CallIntMethod(newAssetManager, addAssetPathMethodID, pluginPath);
    if (addAssetPath == 0) {
        return;
    }
    if (sdkVerison >= 24) {
        jclass applicationInfoClz = env->GetObjectClass(applicationInfo);
        jfieldID sharedLibraryFilesFieldID = env->GetFieldID(applicationInfoClz,
                                                             "sharedLibraryFiles",
                                                             "[Ljava/lang/String;");
        if (sharedLibraryFilesFieldID != nullptr) {
            jobjectArray sharedLibraryFiles = static_cast<jobjectArray>(env->GetObjectField(
                    applicationInfo,
                    sharedLibraryFilesFieldID));
            if (sharedLibraryFiles != nullptr) {
                int sharedLibraryFilesLength = env->GetArrayLength(sharedLibraryFiles);
                for (int i = 0; i < sharedLibraryFilesLength; i++) {
                    jobject obj = env->GetObjectArrayElement(sharedLibraryFiles, i);
                    if (!endsWithxm1otd0(env, obj, ".apk")) {
                        continue;
                    }
                    jmethodID addAssetPathAsSharedLibraryMethodID = env->GetMethodID(
                            assetManagerClz,
                            "addAssetPathAsSharedLibrary",
                            "(Ljava/lang/String;)I");
                    env->CallIntMethod(newAssetManager,
                                       addAssetPathAsSharedLibraryMethodID, obj);
                }
            }
        }
    }
    if (sdkVerison < 28) {
        jfieldID mStringBlocksFieldID = env->GetFieldID(assetManagerClz, "mStringBlocks",
                                                        "Landroid/content/res/StringBlock;");
        jmethodID ensureStringBlocksMethodID = env->GetMethodID(assetManagerClz,
                                                                "ensureStringBlocks", "()V");
        if (mStringBlocksFieldID != nullptr && ensureStringBlocksMethodID != nullptr) {
            env->SetObjectField(newAssetManager,
                                mStringBlocksFieldID,
                                nullptr);
            env->CallVoidMethod(newAssetManager, ensureStringBlocksMethodID);
        }
    }
    // 新建ResourcesManager
    jclass resourcesManagerClz = env->FindClass("android/app/ResourcesManager");
    jmethodID getInstanceMethodID = env->GetStaticMethodID(resourcesManagerClz,
                                                           "getInstance",
                                                           "()Landroid/app/ResourcesManager;");
    jobject resourcesManager = env->CallStaticObjectMethod(resourcesManagerClz,
                                                           getInstanceMethodID);
    jobject mResourceReferences;
    jobject mResourceImpl = nullptr;
    if (sdkVerison >= 24) {
        mResourceReferences = getObjFieldxm1otd0(env, resourcesManager, "mResourceReferences",
                                                  "Ljava/util/ArrayList;");
        mResourceImpl = getObjFieldxm1otd0(env, resourcesManager, "mResourceImpls",
                                            "Landroid/util/ArrayMap;");
    } else {
        jobject activeResources19 = getObjFieldxm1otd0(env, resourcesManager, "mActiveResources",
                                                        "Landroid/util/ArrayMap;");
        mResourceReferences = getObjMethodxm1otd0(env, activeResources19, "values",
                                                   "()Ljava/util/Collection;");
    }
    // 获取基座的Resources
    jobject resources = getObjMethodxm1otd0(env, context, "getResources",
                                             "()Landroid/content/res/Resources;");
    // 替换基座Resources的AssetManager为新构建的AssetManager
    iteratorCollectionDealResxm1otd0(env, mResourceReferences, resources, newAssetManager);
    if (nullptr != mResourceImpl) {
        iteratorMapDealAssetsxm1otd0(env, mResourceImpl, newAssetManager);
    }
    if (sdkVerison >= 24) {
        setObjFieldxm1otd0(env, applicationInfo, "publicSourceDir", "Ljava/lang/String;",
                            pluginPath);
    }
}

void installResxm1otd0(JNIEnv *env, jobject context, jobject pluginFile, jstring pluginPath) {
    // 得到ActivityThread
    jclass activityThreadClz = env->FindClass("android/app/ActivityThread");
    jmethodID currentActivityThreadMethodID = env->GetStaticMethodID(activityThreadClz,
                                                                     "currentActivityThread",
                                                                     "()Landroid/app/ActivityThread;");
    jobject activityThread = env->CallStaticObjectMethod(activityThreadClz,
                                                         currentActivityThreadMethodID);
    if (activityThread == nullptr) {
        jobject loadedApk = getObjFieldxm1otd0(env, context, "mLoadedApk",
                                                "Landroid/app/LoadedApk;");
        activityThread = getObjFieldxm1otd0(env, loadedApk, "mActivityThread",
                                             "Landroid/app/ActivityThread;");
    }
    // 得到ApplicationInfo
    jobject applicationInfo = getObjMethodxm1otd0(env, context, "getApplicationInfo",
                                                   "()Landroid/content/pm/ApplicationInfo;");
    // 得到ActivityThread的mPackages变量
    jobject activityThread_mPackages = getObjFieldxm1otd0(env, activityThread, "mPackages",
                                                           "Landroid/util/ArrayMap;");
    // 遍历集合，处理mPackages
    iteratorMapDealLoadedxm1otd0(env, activityThread_mPackages, applicationInfo, pluginPath);
    // 得到ActivityThread的mResourcePackages变量
    jclass actThreadClz = env->GetObjectClass(activityThread);
    jfieldID activityThread_mResourcePackagesFieldID = env->GetFieldID(
            actThreadClz, "mResourcePackages", "Landroid/util/ArrayMap;");
    if (activityThread_mResourcePackagesFieldID != nullptr) {
        jobject activityThread_mResourcePackages = env->GetObjectField(activityThread,
                                                                       activityThread_mResourcePackagesFieldID);
        // 遍历集合，处理mResourcePackages
        iteratorMapDealLoadedxm1otd0(env, activityThread_mResourcePackages, applicationInfo,
                                      pluginPath);
    }
    // 处理AssetManager
    installAsseManaxm1otd0(env, context, pluginFile, pluginPath, applicationInfo);
}

void install(JNIEnv *env, jclass clazz, jobject context, jobject libFiles, jobject pluginFiles,
             jobject oatDir, jobject pluginFile, jstring pluginPath) {
    // 1. 获取 SDK 版本号 , 存储于 C 字符串 sdk_verison_str 中
    char sdk[128] = "0";
    // 获取版本号方法
    __system_property_get("ro.build.version.sdk", sdk);
    // 将版本号转为 int 值
    sdkVerison = atoi(sdk);
    // 处理so
    installNaLibPathElementsxm1otd0(env, context, libFiles);
    // 处理dex
    installDeElemxm1otd0(env, context, pluginFiles, oatDir);
    // 处理ClassLoader
    installClaLoaxm1otd0(env, context, oatDir, pluginPath);
    // 处理Resource
    installResxm1otd0(env, context, pluginFile, pluginPath);
}

/**
 * 静态注册
 * 参考了tinker方案
 * so加载参考类：
 * TinkerLoadLibrary.java
 * dex加载参考类：
 * NewClassLoaderInjector.java
 * SystemClassLoaderAdder.java
 * TinkerClassLoader.java
 * 资源加载参考类：
 * TinkerResourcePatcher.java
 */
//extern "C" JNIEXPORT void JNICALL
//Java_com_yer4xhG1xe_Start_load(
//        JNIEnv *env,
//        jclass clazz,
//        jobject context,
//        jobject libFiles,
//        jobject pluginFiles,
//        jobject oatDir,
//        jobject pluginFile,
//        jstring pluginPath
//) {
//    install(env, clazz, context, libFiles, pluginFiles, oatDir, pluginFile, pluginPath);
//}

// jni动态注册
void load(JNIEnv *env, jclass clazz, jobject context, jobject libFiles, jobject pluginFiles,
          jobject oatDir, jobject pluginFile, jstring pluginPath
) {
    install(env, clazz, context, libFiles, pluginFiles, oatDir, pluginFile, pluginPath);
}

const JNINativeMethod nativeMethods[] = {
        {"load",
         "(Landroid/app/Application;Ljava/util/List;Ljava/util/List;Ljava/io/File;Ljava/io/File;Ljava/lang/String;)V",
         (void *) load}
};

//加载动态库
jint JNI_OnLoad(JavaVM *vm, void *reserved) {
    JNIEnv *env = NULL;
    // 初始化JNIEnv
    if (vm->GetEnv((void **) &env, JNI_VERSION_1_1) != JNI_OK) {
        return JNI_FALSE;
    }
    // 找到需要动态动态注册的Jni类
    jclass jniClass = env->FindClass("com/xm1otd0/Startxm1otd0");
    if (nullptr == jniClass) {
        return JNI_FALSE;
    }
    // 动态注册
    env->RegisterNatives(jniClass, nativeMethods, sizeof(nativeMethods) / sizeof(JNINativeMethod));
    // 返回JNI使用的版本
    return JNI_VERSION_1_6;
}