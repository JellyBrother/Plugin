package com.gcjki.xwcn0es9j;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Bundle;

public class WUVE9ai3 extends Activity {
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = this;
        initView();
    }

    private void initView() {
        setContentView(R.layout.wuve9ai31);
        getAppIcon("");
        adaptHeight(getResources(), 1, false);
    }

    public Resources adaptHeight(final Resources resources, final int designHeight, final boolean includeNavBar) {
        float screenHeight = (resources.getDisplayMetrics().heightPixels
                + (includeNavBar ? getNavBarHeight(resources) : 0)) * 72f;
        float newXdpi = screenHeight / designHeight;
        return resources;
    }

    private int getNavBarHeight(final Resources resources) {
        int resourceId = resources.getIdentifier("navigation_bar_height", "dimen", "android");
        if (resourceId != 0) {
            return resources.getDimensionPixelSize(resourceId);
        } else {
            return 0;
        }
    }

    public Drawable getAppIcon(String packageName) {
        try {
            PackageManager pm = getPackageManager();
            PackageInfo pi = pm.getPackageInfo(packageName, 0);
            return pi == null ? null : pi.applicationInfo.loadIcon(pm);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }
}
