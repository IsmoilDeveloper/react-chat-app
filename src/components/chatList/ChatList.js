import React, { Component } from 'react'
import "./chatlist.css"
import { ChatListItems } from './ChatListItems';

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&usqp=CAU",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Chat</h2>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    )
  }
}
