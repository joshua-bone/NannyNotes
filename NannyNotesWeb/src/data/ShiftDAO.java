package data;

import java.util.Collection;

import entities.Shift;

public interface ShiftDAO {

	public Collection<Shift> index();

	public Shift show(int id);

	public Shift update(int id, Shift shift);

	public Shift create(Shift newShift);

	public Shift delete(int id);

	public Collection<Shift> index(int id);


}
