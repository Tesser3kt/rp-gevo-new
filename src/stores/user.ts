import { defineStore } from 'pinia'

interface UserInfo {
  id: number
  surname: string
  middleName: string
  firstName: string
  email: string
  username: string
  role: string
}

export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    id: 0,
    surname: '',
    middleName: '',
    firstName: '',
    email: '',
    username: '',
    role: ''
  }),
  getters: {
    fullName: (state): string => {
      return state.middleName
        ? `${state.firstName} ${state.middleName} ${state.surname}`
        : `${state.firstName} ${state.surname}`
    }
  },
  actions: {
    setUser(user: UserInfo): void {
      this.id = user.id
      this.surname = user.surname
      this.middleName = user.middleName
      this.firstName = user.firstName
      this.email = user.email
      ;(this.username = user.username), (this.role = user.role)
    },
    clearUser(): void {
      this.id = 0
      this.surname = ''
      this.middleName = ''
      this.firstName = ''
      this.email = ''
      this.username = ''
      this.role = ''
    }
  }
})
