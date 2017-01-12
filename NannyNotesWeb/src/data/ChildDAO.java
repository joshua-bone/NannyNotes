package data;

import java.util.Collection;

import entities.Child;

public interface ChildDAO {

	public Collection<Child> index();

	public Child show(int id);

	public Child update(int id, Child child);

	public Child create(Child child);

	public Child delete(int id);

}
