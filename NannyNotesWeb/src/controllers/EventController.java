package controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.EventDAO;
import entities.Event;

@RestController
public class EventController {

	@Autowired
	EventDAO eventDao;
	
	@RequestMapping(value="events/ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}

	@RequestMapping(path="events", method=RequestMethod.GET)
	public Collection<Event> index(){
	  return eventDao.index();
	}
	
	@RequestMapping(path="events/{id}", method=RequestMethod.GET)
	public Event show(@PathVariable int id){
	  return eventDao.show(id);
	}
	
	@RequestMapping(path="events/{id}", method=RequestMethod.PUT)
	public Event update(@PathVariable int id, @RequestBody String jsonEvent){
		ObjectMapper mapper = new ObjectMapper();
		Event event = null;
		try {
		  event = mapper.readValue(jsonEvent, Event.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return eventDao.update(id, event);
	}
	
	@RequestMapping(path="events", method=RequestMethod.POST)
	public Event create(@RequestBody String jsonEvent){
		System.out.println(jsonEvent);
		ObjectMapper mapper = new ObjectMapper();
		Event event = null;
		try {
		  event = mapper.readValue(jsonEvent, Event.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return eventDao.create(event);
	}
	
	@RequestMapping(path="events/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		eventDao.delete(id);
	}

}
