package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import data.TaskDAO;

@RestController
public class TaskController {

	@Autowired
	TaskDAO taskDao;
	
	

}
