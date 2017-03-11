package service;

import model.HostelApply;

import java.util.List;

/**
 * Created by L.H.S on 2017/3/11.
 */
public interface HostelApplyService {

    void apply(String applyer, String phone,
               String email, String identity, String hostelname,
               String location, String description, String imgurl);

    List<HostelApply> getApply();

    void updateState(int applyId, String state, int approverId);
}
