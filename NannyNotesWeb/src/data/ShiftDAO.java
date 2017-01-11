package data;

import java.util.Collection;

import entities.Shift;

public interface ShiftDAO {

	Collection<Shift> index();

	Shift show(int id);

	Shift update(int id, Shift shift);

	Shift create(Shift newShift);

	Shift delete(int id);


}
