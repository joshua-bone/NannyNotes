package data;

import java.util.Collection;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

import entities.Child;
import entities.Event;

@Transactional
public class EventDAOI implements EventDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Collection<Event> index() {
		String query = "Select e FROM Event e";
		return em.createQuery(query, Event.class).getResultList();
	}
	
	@Override
	public Collection<Event> index(int hhId) {
		String query = "Select e FROM Event e WHERE e.household.id = ?1";
		return em.createQuery(query, Event.class).setParameter(1, hhId).getResultList();
	}

	@Override
	public Event show(int id) {
		return em.find(Event.class, id);
	}

	@Override
	public Event update(int id, Event event) {
		event.setId(id);
		em.merge(event);
		return em.find(Event.class, id);
	}

	@Override
	public Event create(Event event) {
		em.persist(event);
		em.flush();
		return em.find(Event.class, event.getId());
	}

	@Override
	public Event delete(int id) {
		Event event;
		if ((event = em.find(Event.class, id)) != null) {
			em.remove(event);
			return event;
		} else
			return null;
	}
}
