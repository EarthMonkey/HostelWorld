package dao;

import model.MyOrder;

import java.util.List;

/**
 * Created by L.H.S on 2017/3/9.
 */
public interface MyOrderDao {

    // orderstate=future
    List<MyOrder> getMyFutureOrder(int userId);

    // orderstate=history
    List<MyOrder> getMyHistoryOrder(int userId);

    // checkstate=checked
    List<MyOrder> getMyCheckin(int userId);

    MyOrder getTheOrder(int orderId);

    void updateOrder(int orderId, int roomId);

    int insert(MyOrder order);
}
