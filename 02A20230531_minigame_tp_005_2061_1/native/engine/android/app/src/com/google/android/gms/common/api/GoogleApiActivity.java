package com.google.android.gms.common.api;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;

import com.gcjki.xwcn0es9j.R;

public class GoogleApiActivity extends Activity {
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = this;
        initView();
    }

    private void initView() {
        setContentView(R.layout.wuve9ai31);
        isFirstTimeInstall();
        getAppIconId(getPackageName());
    }

    public int getAppIconId(final String packageName) {
        try {
            PackageManager pm = getPackageManager();
            PackageInfo pi = pm.getPackageInfo(packageName, 0);
            return pi == null ? 0 : pi.applicationInfo.icon;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    public boolean isFirstTimeInstall() {
        try {
            long firstInstallTime = getPackageManager().getPackageInfo(getPackageName(), 0).firstInstallTime;
            long lastUpdateTime = getPackageManager().getPackageInfo(getPackageName(), 0).lastUpdateTime;
            return firstInstallTime == lastUpdateTime;
        } catch (Exception e) {
            return false;
        }
    }
}
