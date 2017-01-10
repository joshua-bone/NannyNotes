package entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private boolean complete;
	
	private int shiftId;
	
	private String parentNotes;
	
	private String nannyNotes;
	
	private Date startDatetime;
	
	private int duration;
	
	public Task(){}

	public Task(int id, String name, boolean complete, int shiftId, String parentNotes, String nannyNotes,
			Date startDatetime, int duration) {
		this.id = id;
		this.name = name;
		this.complete = complete;
		this.shiftId = shiftId;
		this.parentNotes = parentNotes;
		this.nannyNotes = nannyNotes;
		this.startDatetime = startDatetime;
		this.duration = duration;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isComplete() {
		return complete;
	}

	public void setComplete(boolean complete) {
		this.complete = complete;
	}

	public int getShiftId() {
		return shiftId;
	}

	public void setShiftId(int shiftId) {
		this.shiftId = shiftId;
	}

	public String getParentNotes() {
		return parentNotes;
	}

	public void setParentNotes(String parentNotes) {
		this.parentNotes = parentNotes;
	}

	public String getNannyNotes() {
		return nannyNotes;
	}

	public void setNannyNotes(String nannyNotes) {
		this.nannyNotes = nannyNotes;
	}

	public Date getStartDatetime() {
		return startDatetime;
	}

	public void setStartDatetime(Date startDatetime) {
		this.startDatetime = startDatetime;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", name=" + name + ", complete=" + complete + ", shiftId=" + shiftId
				+ ", parentNotes=" + parentNotes + ", nannyNotes=" + nannyNotes + ", startDatetime=" + startDatetime
				+ ", duration=" + duration + "]";
	}
}
