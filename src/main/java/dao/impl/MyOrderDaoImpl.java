package dao.impl;

import dao.MyOrderDao;
import model.MyOrder;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by L.H.S on 2017/3/9.
 */

@Repository
public class MyOrderDaoImpl implements MyOrderDao {

    @Autowired
    private SessionFactory sessionFactory;


    public List<MyOrder> getMyFutureOrder(int userId) {

        Session session = sessionFactory.getCurrentSession();
        String hql = "from model.MyOrder as mo where mo.userId=" + userId + " and mo.orderstate='future'";
        session.createQuery(hql);

        return null;
    }

    public List<MyOrder> getMyHistoryOrder(int userId) {
        return null;
    }

    public List<MyOrder> getMyCheckin(int userId) {
        return null;
    }
}
