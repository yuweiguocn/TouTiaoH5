package io.github.yuweiguocn.toutiaoh5.utils;

import android.content.Context;
import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;

/**
 * Log统一管理类
 * 
 * @author way
 * 
 */
public class L {
	public static boolean isDebug = true;// 是否需要打印bug，可以在application的onCreate函数里面初始化
	private static final String TAG = "ywg";

    //打印json数据
    public static void j(String msg) {
        if (isDebug)
            Log.i("json", msg);
    }

	// 下面四个是默认tag的函数
	public static void i(String msg) {
		if (isDebug)
			Log.i(TAG, msg);
	}

	public static void d(String msg) {
		if (isDebug)
			Log.d(TAG, msg);
	}

	public static void e(String msg) {
		if (isDebug)
			Log.e(TAG, msg);
	}

	public static void v(String msg) {
		if (isDebug)
			Log.v(TAG, msg);
	}

	// 下面是传入自定义tag的函数
	public static void i(String tag, String msg) {
		if (isDebug)
			Log.i(tag, msg);
	}

	public static void d(String tag, String msg) {
		if (isDebug)
			Log.i(tag, msg);
	}

	public static void e(String tag, String msg) {
		if (isDebug)
			Log.e(tag, msg);
	}

    public static void e(Throwable e) {
        if (isDebug)
            Log.e(TAG, "error", e);
    }


    public static void e(String msg, Throwable e) {
        if (isDebug)
            Log.e(TAG, msg, e);
    }
    public static void e(String tag, String msg, Throwable e) {
        if (isDebug)
            Log.e(TAG, msg, e);
    }

	public static void v(String tag, String msg) {
		if (isDebug)
			Log.i(tag, msg);
	}

    /**
     * Divides a string into chunks of a given character size.
     *
     * @param text                  String text to be sliced
     * @param sliceSize             int Number of characters
     * @return  ArrayList<String>   Chunks of strings
     */
    public static ArrayList<String> splitString(String text, int sliceSize) {
        ArrayList<String> textList = new ArrayList<String>();
        String aux;
        int left = -1, right = 0;
        int charsLeft = text.length();
        while (charsLeft != 0) {
            left = right;
            if (charsLeft >= sliceSize) {
                right += sliceSize;
                charsLeft -= sliceSize;
            }
            else {
                right = text.length();
                aux = text.substring(left, right);
                charsLeft = 0;
            }
            aux = text.substring(left, right);
            textList.add(aux);
        }
        return textList;
    }

    /**
     * Divides a string into chunks.
     *
     * @param text                  String text to be sliced
     * @return  ArrayList<String>
     */
    public static ArrayList<String> splitString(String text) {
        return splitString(text, 80);
    }

    /**
     * Divides the string into chunks for displaying them
     * into the Eclipse's LogCat.
     *
     * @param text      The text to be split and shown in LogCat
     * @param tag       The tag in which it will be shown.
     */
    public static void dL(String text) {
        ArrayList<String> messageList = splitString(text);
        for (String message : messageList) {
            L.d(TAG, message);
        }
    }



    public static void wF(Context context, String text) {

        File file = new File(context.getCacheDir(), "ywg-" + System.currentTimeMillis() + ".txt");
        try {
            OutputStream os = new FileOutputStream(file);
            os.write(text.getBytes());
            os.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
        L.d("write file:" + file.getAbsolutePath());
    }

}
