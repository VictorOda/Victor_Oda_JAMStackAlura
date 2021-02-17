export default function MoveToPosition(element: string, block: string): void {
  if (block === 'center') {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (block === 'start') {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (block === 'end') {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'end' });
  } else if (block === 'nearest') {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
