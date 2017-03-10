package service.impl;

import dao.UserDao;
import model.RespInfo;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.UserService;

import javax.transaction.Transactional;

/**
 * Created by L.H.S on 2017/3/10.
 */

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;


    public int userRegister(String password, String username, String phone, String email, String birth, String sex, String bankcard) {

        int userId = userDao.insert(new User(password, username, phone, email, birth, sex, bankcard));

        return userId;
    }

    public void setPwd(int userId, String pwd) {
        userDao.setPwd(userId, pwd);
    }

    public void setBalance(int userId, double balance) {
        userDao.setBalance(userId, balance);
    }

    public RespInfo userLogin(int userId, String pwd) {

        RespInfo respInfo = userDao.getPwd(userId);
        if (respInfo.getStatus() ==  true) {
            if (respInfo.getInfo().equals(pwd)) {
                return new RespInfo(true, "","");
            } else {
                return new RespInfo(false, "密码错误", "");
            }
        } else {
            return new RespInfo(false, respInfo.getInfo(), "");
        }
    }

    public int userUpdate(User user) {
        return 0;
    }
}
