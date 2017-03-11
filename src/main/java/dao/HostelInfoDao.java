package dao;

import common.RespInfo;
import model.HostelInfo;

/**
 * Created by L.H.S on 2017/3/9.
 */
public interface HostelInfoDao {

    RespInfo getPwd(int hosId);

    HostelInfo getInfo(int hosId);
}
