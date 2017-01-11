package entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private boolean complete;
	@JsonBackReference
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="shift_id")
	private Shift shift;
	@Column(name="parent_notes")
	private String parentNotes;
	@Column(name="nanny_notes")
	private String nannyNotes;
	@Column(name="start_datetime")
	private Date startDateTime;
	@Column(name="end_datetime")
	private Date endDateTime;
	
	public Task(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public Shift getShift() {
		return shift;
	}

	public void setShift(Shift shift) {
		this.shift = shift;
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

	public Date getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(Date startDateTime) {
		this.startDateTime = startDateTime;
	}

	public Date getEndDateTime() {
		return endDateTime;
	}

	public void setEndDateTime(Date endDateTime) {
		this.endDateTime = endDateTime;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", name=" + name + ", complete=" + complete + ", shift=" + shift + ", parentNotes="
				+ parentNotes + ", nannyNotes=" + nannyNotes + ", startDateTime=" + startDateTime + ", endDateTime="
				+ endDateTime + "]";
	}
}
