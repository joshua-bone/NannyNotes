package data;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public class TaskDAOI implements TaskDAO {

	@PersistenceContext
	private EntityManager em;

}
