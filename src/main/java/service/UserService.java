package service;

import model.RespInfo;
import model.User;

/**
 * Created by L.H.S on 2017/3/10.
 */
public interface UserService {

    int userRegister(String password, String username, String phone, String email, String birth, String sex, String bankcard);

    void setPwd(int userId, String pwd);

    void setBalance(int userId, double balance);

    RespInfo userLogin(int userId, String pwd);

    int userUpdate(User user);
}
