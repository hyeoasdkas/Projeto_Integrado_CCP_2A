package br.com.usjt.projcontrol.Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletGlobal extends HttpServlet{
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		RequestDispatcher rd = request.getRequestDispatcher("WEB-INF/view/login.jsp");
		rd.forward(request, response);
	}
}
