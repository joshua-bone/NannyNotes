package data;

import java.util.Collection;
import entities.Task;

public interface TaskDAO {

	public Collection<Task> index();

	public Task show(int id);

	public Task update(int id, Task task);

	public Task create(Task task);

	public Task delete(int id);

}
