package service.impl;

import dao.MyOrderDao;
import model.MyOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.OrderService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by L.H.S on 2017/3/11.
 */

@Service("orderService")
@Transactional
public class OrderServiceImpl implements OrderService{

    @Autowired
    private MyOrderDao orderDao;

    public List<MyOrder> getFutureOrder(int userId) {

        return orderDao.getMyFutureOrder(userId);
    }

    public List<MyOrder> getHistoryOrder(int userId) {
        return orderDao.getMyHistoryOrder(userId);
    }

    public List<MyOrder> getCheckin(int userId) {
        return orderDao.getMyCheckin(userId);
    }
}
