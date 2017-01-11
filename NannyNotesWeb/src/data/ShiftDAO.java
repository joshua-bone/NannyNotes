package data;

import java.util.Collection;

import entities.Household;
import entities.Shift;

public interface ShiftDAO {

	Collection<Shift> index();

	Shift show(int id);

	Shift update(int id, Shift shift);

	Household create(Shift newShift);

	void delete(int id);


}
