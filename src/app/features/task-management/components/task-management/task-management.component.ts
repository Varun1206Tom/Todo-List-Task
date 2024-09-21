import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {

  selectedDate: Date = new Date();
  showModal: boolean = false;
  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  
  newTask = {
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    description: ''
  };

  editedTaskIndex: number = -1;

  searchTerm: string = '';

  tasks = [
    { assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', description: 'This task is good' },
  ];

  filteredTasks = [ ...this.tasks ];

  constructor( ) { }

  ngOnInit(): void {
    this.filteredTasks = [ ...this.tasks ];
  }

  getSearchedTask() {
    this.filteredTasks = this.tasks.filter(task => {
      return task.assignedTo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             task.status.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             task.description.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  resetNewTask() {
    this.newTask = {
      assignedTo: '',
      status: '',
      dueDate: '',
      priority: '',
      description: ''
    };
  }

  openAddModal() {
    this.showModal = true;
    this.resetNewTask();
  }

  closeAddModal() {
    this.showModal = false;
  }

  openEditModal(index: number) {
    this.editedTaskIndex = index;
    this.newTask = { ...this.tasks[index] };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.resetNewTask();
  }

  openDeleteModal(index: number) {
    this.editedTaskIndex = index;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  addTask() {
    if (this.newTask.assignedTo && this.newTask.status && this.newTask.dueDate && this.newTask.priority && this.newTask.description) {
      this.tasks.push({ ...this.newTask });
      this.filteredTasks = [ ...this.tasks ];
      this.closeAddModal();
      alert('Successfully added new task');
    } else {
      alert('Please fill all fields');
    }
  }

  updateTask() {
    if (this.newTask.assignedTo && this.newTask.status && this.newTask.dueDate && this.newTask.priority && this.newTask.description) {
      this.tasks[this.editedTaskIndex] = { ...this.newTask };
      this.filteredTasks = [ ...this.tasks ];
      this.closeEditModal();
      alert('Successfully updated task');
    } else {
      alert('Please fill all fields');
    }
  }

  deleteTask() {
    this.tasks.splice(this.editedTaskIndex, 1); 
    this.filteredTasks = [ ...this.tasks ];
    this.closeDeleteModal();
    alert('Successfully deleted task');
  }
}

