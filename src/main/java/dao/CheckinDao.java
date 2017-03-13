package dao;

import model.CheckIn;

/**
 * Created by L.H.S on 2017/3/9.
 */
public interface CheckinDao {

    void insert(CheckIn checkIn);

    CheckIn getCheck(int hosId, int roomId);

    void updateState(int hosId, int roomId);
}
