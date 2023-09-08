package com.ittam.web.user_request.service;

import com.ittam.web.command.UserRequestVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;

@Mapper
public interface UserRequestMapper {
    public ArrayList<UserRequestVO> UserRequestList();
    public int UserRequestApprove(int userq_NUM);
    public int UserRequestreturn(int userq_NUM);
    public ArrayList<UserRequestVO> UserRequestSearch (String inputText);
    public ArrayList<UserRequestVO> UserRequestHandle();
    public ArrayList<UserRequestVO> UserRequestHandleSearch(@Param("inputText") String inputText, @Param("pageNav") ArrayList<String> pageNav);
    public ArrayList<UserRequestVO> UserRequestNavSearch(@Param("navText")ArrayList<String> navText);
    public ArrayList<UserRequestVO> UserRequestCategorySearch(@Param("category_num")String category_num, @Param("navText") ArrayList<String> navText);


}
