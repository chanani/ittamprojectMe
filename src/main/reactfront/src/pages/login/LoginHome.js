
import axios from "axios";
import { BsFillPersonCheckFill } from "react-icons/bs";


function LoginHome (){

  const authBtn = (e) => { // 비밀번호 찾기 인증번호 요청
    let target = e.target;
    
    if(target.innerText === "인증번호 확인"){ // 인증번호 확인 버튼
      let emailInput = document.getElementById("yourPassword2").value;
      let authNum = document.getElementById("yourPassword3").value;
      if(authNum == "aaa"){
        alert("성공");
      }
      // authCheck(authNum.value);
    }

    if(target.classList.contains("auth")){ // 이메일 입력 후 인증번호 요청 버튼 클릭
      let emailInput = document.getElementById("yourPassword2").value;

      axios({ // 등록되어있는 이메일 여부 확인
        url : 'http://localhost:9191/login/passwordFind',
        method : 'post',
        data : {
          emailInput : emailInput
        }
      })
      .then((response) => { // 조회
        if (response.data.length !== 0){
            console.log(response.data);
        alert("인증번호가 발송되었습니다.");
        target.innerText = "인증번호 확인";
        target.classList.remove("auth");
        let open = document.getElementById("yourPassword3");
        open.disabled= ""; // 인증번호 비활성화 풀기
        } else {
          alert("등록되지 않은 이메일입니다.");
        }
      })
      .catch((error) => { // 등록되지 않은 이메일
        alert("데이터 확인에 실패하였습니다.");
      });

    }
  }

  
  


  return (


    <div>

      <main>
          <div className="container">

            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <div className="d-flex justify-content-center py-4" >
                      <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="assets/img/ittamdog.png" alt=""></img>
                        <span className="d-none d-lg-block">Ittam</span>
                      </a>
                    </div>

                    <div className="card mb-3">

                      <div className="card-body">

                        <div className="pt-4 pb-2">
                          
                          <h5 className="card-title text-center pb-0 fs-4">Ittam 로그인</h5>
                          <p className="text-center small">자산 시스템에 오신 것을 환영합니다.</p>
                        </div>

                        <form className="row g-3 needs-validation">

                          <div className="col-12">
                            <label htmlFor="yourUsername" className="form-label">사원번호</label>
                            <div className="input-group has-validation">
                              <span className="input-group-text" id="inputGroupPrepend"><BsFillPersonCheckFill/></span>
                              <input type="text" name="username" className="form-control" id="yourUsername" required/>
                              <div className="invalid-feedback">Please enter your username.</div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label htmlFor="yourPassword" className="form-label">비밀번호</label>
                            <input type="password" name="password" className="form-control" id="yourPassword1" required/>
                            <div className="invalid-feedback">Please enter your password!</div>
                          </div>

                          <div className="col-12">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                              <label className="form-check-label" htmlFor="rememberMe">아이디 기억하기</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Login</button>
                          </div>
                          <div className="col-12">
                            <p className="small mb-0">비밀번호를 잊어버리셨나요? 
                            <button type="button" className="btn btn-primary passwordFind" data-bs-toggle="modal" data-bs-target="#verticalycentered">
                              비밀번호 찾기
                            </button>
                            </p>
                          </div>
                        </form>

                      </div>
                    </div>

                
                  </div>
                </div>
              </div>

            </section>

          </div>
        </main>

        {/* 비밀번호 찾기 모달창 */}
        <div className="modal fade" id="verticalycentered" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">비밀번호 찾기</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-box">
                      <div className="col-12 ">
                              <label htmlFor="yourPassword" className="form-label">이메일</label>
                              <input type="email" name="password" className="form-control modal-input" id="yourPassword2" placeholder="이메일을 입력해주세요." required/>
                      </div>
                      <div className="col-12 auth-box">
                              <label htmlFor="yourPassword" className="form-label">인증번호</label>
                              <input type="text" name="password" className="form-control modal-input" id="yourPassword3" disabled/>
                      </div>

                      <div className="col-12 emailAuth">
                            <button className="btn btn-primary w-100 auth" type="submit" onClick={authBtn}>인증번호 받기</button>
                      </div>
            
                      </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary modalClose" data-bs-dismiss="modal">취소</button>
                    </div>
                  </div>
                </div>
              </div>

     
    </div>
    
  )
}

export default LoginHome
