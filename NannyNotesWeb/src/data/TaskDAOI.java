package data;

import java.util.Collection;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import entities.Task;

@Transactional
public class TaskDAOI implements TaskDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Collection<Task> index() {
		String query = "Select t FROM Task t";
		return em.createQuery(query, Task.class).getResultList();
	}

	@Override
	public Task show(int id) {
		return em.find(Task.class, id);

	}

	@Override
	public Task update(int id, Task task) {
		task.setId(id);
		em.merge(task);
		return em.find(Task.class, id);
	}

	@Override
	public Task create(Task task) {
		em.persist(task);
		em.flush();
		return em.find(Task.class, task.getId());
	}

	@Override
	public Task delete(int id) {
		Task task;
		if ((task = em.find(Task.class, id)) != null) {
			em.remove(task);
			return task;
		} else
			return null;
	}

}
