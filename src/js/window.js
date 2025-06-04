document.addEventListener("DOMContentLoaded", () => {
	const hwnd = document.querySelector(".window")
	const titleBar = hwnd.querySelector(".window-titlebar")

	titleBar.addEventListener("mousedown", startDrag)
	titleBar.addEventListener("touchstart", startDrag, { passive: false })

	function startDrag(e) {
		if (e.target !== titleBar) return

		let isTouch = e.type.startsWith("touch")
		let startX = isTouch ? e.touches[0].clientX : e.clientX
		let startY = isTouch ? e.touches[0].clientY : e.clientY

		let offsetX = startX - hwnd.offsetLeft
		let offsetY = startY - hwnd.offsetTop

		function onMove(e) {
			let clientX = isTouch ? e.touches[0].clientX : e.clientX
			let clientY = isTouch ? e.touches[0].clientY : e.clientY

			let newX = clientX - offsetX
			let newY = clientY - offsetY

			hwnd.style.top = `${newY}px`
			hwnd.style.left = `${newX}px`
		}

		function stopMove() {
			let maxX = window.innerWidth - hwnd.offsetWidth
			let maxY = window.innerHeight - hwnd.offsetHeight

			let finalX = Math.min(Math.max(hwnd.offsetLeft, 0), maxX)
			let finalY = Math.min(Math.max(hwnd.offsetTop, 0), maxY)

			hwnd.style.top = `${finalY}px`
			hwnd.style.left = `${finalX}px`

			document.removeEventListener("mousemove", onMove)
			document.removeEventListener("mouseup", stopMove)
			document.removeEventListener("touchmove", onMove)
			document.removeEventListener("touchend", stopMove)
		}

		document.addEventListener("mousemove", onMove)
		document.addEventListener("mouseup", stopMove)
		document.addEventListener("touchmove", onMove, { passive: false })
		document.addEventListener("touchend", stopMove)
	}
})
