package br.com.usjt.projcontrol.Controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.usjt.projcontrol.Interface.Acao;

public class Login implements Acao{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		
		String login, senha;
		
		login = request.getParameter("");
		senha = request.getParameter("");
		
		
		
		return null;
	}
	
}
