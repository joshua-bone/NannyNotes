package data;

import java.util.Collection;

import entities.Event;

public interface EventDAO {

	public Collection<Event> index();
	
	public Collection<Event> index(int hhid);

	public Event show(int id);

	public Event update(int id, Event event);

	public Event create(Event event);

	public Event delete(int id);

}
