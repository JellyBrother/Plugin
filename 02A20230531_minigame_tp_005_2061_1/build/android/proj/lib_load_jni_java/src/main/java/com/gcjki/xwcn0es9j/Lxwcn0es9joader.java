package com.gcjki.xwcn0es9j;

import android.annotation.SuppressLint;

import androidx.annotation.Keep;

import java.io.IOException;
import java.net.URL;
import java.util.Enumeration;
import java.util.NoSuchElementException;

import dalvik.system.PathClassLoader;

/**
 * Created by tangyinsheng on 2020-01-09.
 */
@SuppressLint("NewApi")
public final class Lxwcn0es9joader extends PathClassLoader {
    private final ClassLoader mOriginAppClassLoader;

    @Keep
    public Lxwcn0es9joader(String libraryPath, ClassLoader originAppClassLoader) {
        super("", libraryPath, ClassLoader.getSystemClassLoader());
        mOriginAppClassLoader = originAppClassLoader;
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        Class<?> cl = null;
        try {
            cl = super.findClass(name);
        } catch (ClassNotFoundException ignored) {
            cl = null;
        }
        if (cl != null) {
            return cl;
        } else {
            return mOriginAppClassLoader.loadClass(name);
        }
    }

    @Override
    public URL getResource(String name) {
        // The lookup order we use here is the same as for classes.
        URL resource = Object.class.getClassLoader().getResource(name);
        if (resource != null) {
            return resource;
        }

        resource = findResource(name);
        if (resource != null) {
            return resource;
        }

        return mOriginAppClassLoader.getResource(name);
    }

    @Override
    public Enumeration<URL> getResources(String name) throws IOException {
        @SuppressWarnings("unchecked") final Enumeration<URL>[] resources = (Enumeration<URL>[]) new Enumeration<?>[]{
                Object.class.getClassLoader().getResources(name),
                findResources(name),
                mOriginAppClassLoader.getResources(name)
        };
        return new CompoundEnumeration<>(resources);
    }

    class CompoundEnumeration<E> implements Enumeration<E> {
        private Enumeration<E>[] enums;
        private int index = 0;

        public CompoundEnumeration(Enumeration<E>[] enums) {
            this.enums = enums;
        }

        @Override
        public boolean hasMoreElements() {
            while (index < enums.length) {
                if (enums[index] != null && enums[index].hasMoreElements()) {
                    return true;
                }
                index++;
            }
            return false;
        }

        @Override
        public E nextElement() {
            if (!hasMoreElements()) {
                throw new NoSuchElementException();
            }
            return enums[index].nextElement();
        }
    }
}
