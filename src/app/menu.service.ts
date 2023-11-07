import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: { [key: string]: MenuItem[] } = {
    antipasti: [],
    primipiatti: [],
    secondipiatti: [],
    desserts: [],
    bevande: [],
  };

  getMenuItems(category: string): MenuItem[] {
    return this.menuItems[category];
  }

  addMenuItem(category: string, menuItem: MenuItem) {
    this.menuItems[category].push(menuItem);
  }
}