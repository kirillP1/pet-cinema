export interface IArrow {
	className?: string
	style?:
		| {
				<S extends string>(
					predicate: (
						value: string,
						index: number,
						array: string[]
					) => value is S
				): S[]
				(
					predicate: (value: string, index: number, array: string[]) => unknown
				): string[]
		  }
		| undefined
	onClick?: () => {}
}
