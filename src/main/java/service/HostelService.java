package service;

import common.RespInfo;

/**
 * Created by L.H.S on 2017/3/12.
 */
public interface HostelService {

    RespInfo hostelLogin(int hostelId, String pwd);
}
