package dao.impl;

import dao.CheckoutDao;
import model.CheckOut;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by L.H.S on 2017/3/9.
 */

@Repository
public class CheckoutDaoImpl implements CheckoutDao{

    @Autowired
    private SessionFactory sessionFactory;

    public void insert(CheckOut checkOut) {
        sessionFactory.getCurrentSession().save(checkOut);
    }
}
