package com.kidsmap;

import com.reactnativenavigation.controllers.SplashActivity;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.view.Gravity;
import android.util.TypedValue;
import android.widget.TextView;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout(){
        LinearLayout view = new LinearLayout(this);
        TextView text = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#00A6E7"));
        view.setGravity(Gravity.CENTER);

        text.setText("Kidsmap");
        text.setTextColor(Color.parseColor("#FFE37F"));
        text.setGravity(Gravity.CENTER);
        text.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 60);

        view.addView(text);
        return view;
    }

}