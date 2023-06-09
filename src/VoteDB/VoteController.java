package VoteDB;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class VoteController extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        requestPro(request, response);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        requestPro(request, response);
    }

    protected void requestPro(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /* URL check */
        String uri = request.getRequestURI();
        String context = request.getContextPath();
        String command = uri.substring(context.length());
        String site = null;

        System.out.println("command : "+command);

        VoteDAO vote = new VoteDAO();

        switch(command) {
            case "/main.do" :

                site = "index.jsp";
                break;
            case "/memberList.do" :

                site = "memberList.jsp";
                break;
            case "/voteMember.do" :

                site = "voteMember.jsp";
                break;
            case "/voteList.do" :

                site = "voteList.jsp";
                break;
            case "/voteResult.do" :

                site = "voteResult.jsp";
                break;
            default : break;
        }
        /* 결과 */
        //getRequestDispatcher(); 메서드 안에 들어가는 문자열에는 뷰페이지경로.jsp가 들어갑니다.
        RequestDispatcher dispatcher = request.getRequestDispatcher(site);
        dispatcher.forward(request, response);
    }
}