const ApproveTable = ({index, userq_num, user_id, userq_count, userq_kind, userq_regdate, userq_title, userq_comment, func, funcClose}) => {
 

  return (
   
    <tr className="prod-box">
      <th scope="row">{index + 1}</th>
      <td className="user_ID">{user_id}</td>
      <td className="userq_KIND">{userq_kind}</td>
      <td className="userq_COUNT">{userq_count}</td>
      <td className="userq_REGDATE">{userq_regdate}</td>
      <th className="userq_TITLE" >{userq_title}</th>
      <th className="userq_COMMENT" style={{display :"none"}}>{userq_comment}</th>
      <th className="userq_NUM" style={{display :"none"}}>{userq_num}</th>
      <td>
      <button className="btn btn-primary approveBtn" type="button"  data-bs-formtarget="#basicModal" onClick={func} id="approveBtn">승인</button>
      </td>
      <td>
      <button className="btn btn-primary approveBtn" type="button"  data-bs-formtarget="#basicModal" onClick={funcClose}>반려</button>
      </td>
    </tr>
  

  )
}

export default ApproveTable;