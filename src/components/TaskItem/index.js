
import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task-item' >
            <div className='task-text'>

                <img
                 src={`${task.completed ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXAJ5YoVWGoNB_CAcz_DPEiMdhOYYDeIxGg&s" : 'https://static.vecteezy.com/system/resources/previews/034/371/004/non_2x/cross-mark-button-icon-close-button-ban-vector.jpg'}`} 
                 onClick={() => onToggle(task.id)} 
                 alt='toggle'
                 width={30} height={30} 
                  />
                 <span className={`innerText ${task.completed ? 'completed' : ''}`}>{task.text}</span>
            </div>
        
                <button className='delete-button' onClick={(e) => { onDelete(task.id); }}>❌</button>
       
        </div>
    );
};

export default TaskItem;