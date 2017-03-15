package dao;

import model.CheckIn;

/**
 * Created by L.H.S on 2017/3/9.
 */
public interface CheckinDao {

    void insert(CheckIn checkIn);

    CheckIn getCheck(int hosId, int roomId);

    void updateState(int hosId, int roomId);

    // checkin 人次
    int getCheckNums(int hosId);

    // valid状态且 userId = -1 的checkin金额
    double getCheckPay(int hosId);
}
