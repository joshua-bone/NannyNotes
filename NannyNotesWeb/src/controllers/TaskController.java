package controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.TaskDAO;
import entities.Task;

@RestController
public class TaskController {

	@Autowired
	TaskDAO taskDao;
	
	@RequestMapping(value="tasks/ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}

	@RequestMapping(path="tasks", method=RequestMethod.GET)
	public Collection<Task> index(){
	  return taskDao.index();
	}
	
	@RequestMapping(path="tasks/{id}", method=RequestMethod.GET)
	public Task show(@PathVariable int id){
	  return taskDao.show(id);
	}
	
	@RequestMapping(path="tasks/{id}", method=RequestMethod.PUT)
	public Task update(@PathVariable int id, @RequestBody String jsonTask){
		ObjectMapper mapper = new ObjectMapper();
		Task task = null;
		try {
		  task = mapper.readValue(jsonTask, Task.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return taskDao.update(id, task);
	}
	
	@RequestMapping(path="tasks", method=RequestMethod.POST)
	public Task create(@RequestBody String jsonTask){
		ObjectMapper mapper = new ObjectMapper();
		Task task = null;
		try {
		  task = mapper.readValue(jsonTask, Task.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return taskDao.create(task);
	}
	
	@RequestMapping(path="tasks/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		taskDao.delete(id);
	}

}
