export const LSget = (name) => {
	return localStorage.getItem(name)
}
export const LSset = (name, item) => {
	return localStorage.setItem(name, item)
}
export const LSdelete = (item) => {
	return localStorage.removeItem(item)
}