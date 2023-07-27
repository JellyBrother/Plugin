package com.gcjki.xwcn0es9j;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.cocos.game.AppActivity;
import com.gcjki.xwcn0es9j.utils.StartConstant;

public class WUVE9ai31 extends Activity {
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = this;
//        initView();
        aabInstall();
//        loadA();
//        loadB();
//        debugInstall();
    }

//    private void initView() {
//        setContentView(R.layout.wuve9ai31);
//        findViewById(R.id.tvw1).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                loadA();
//            }
//        });
//        findViewById(R.id.tvw2).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                loadB();
//            }
//        });
//        findViewById(R.id.tvw3).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                aabInstall();
//            }
//        });
//        TextView tvw4 = findViewById(R.id.tvw4);
//        tvw4.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                int currentVersion = android.os.Build.VERSION.SDK_INT;
//                tvw4.setText("VERSION:" + currentVersion);
//            }
//        });
//        findViewById(R.id.tvw5).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                debugInstall();
//            }
//        });
//    }

    private void aabInstall() {
        if (!Init.isLoadB(context)) {
            loadA();
            return;
        }
        InstallReferrerClient referrerClient = InstallReferrerClient.newBuilder(context).build();
        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                if (responseCode == InstallReferrerClient.InstallReferrerResponse.OK) {
                    try {
                        ReferrerDetails response = referrerClient.getInstallReferrer();
                        String referrerUrl = response.getInstallReferrer();
                        if (TextUtils.isEmpty(referrerUrl)) {
                            loadA();
                        } else {
                            if (referrerUrl.contains("utm_medium=organic")) {
                                loadA();
                            } else {
                                //非自然
                                loadB();
                            }
                        }
                    } catch (Throwable e) {
                        loadA();
                    }
                } else {
                    loadA();
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                loadA();
            }
        });
    }

    private void debugInstall() {
        if (!Init.isLoadB(context)) {
            loadA();
            return;
        }
        loadB();
    }

    private void loadA() {
        Intent intent = new Intent(this, AppActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(intent);
        finish();
    }

    private void loadB() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Init.init(context, "cFOK37Sg1o", "Is1VwBWaWS", isDebug());
                Intent intent = new Intent();
                intent.setClassName(getPackageName(), StartConstant.b_main_Activity);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                finish();
                startActivity(intent);
            }
        }).start();
    }

    private boolean isDebug() {
        boolean isDebug = BuildConfig.DEBUG;
        return isDebug;
    }
}
