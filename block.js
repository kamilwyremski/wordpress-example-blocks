( function ( blocks, _, i18n, element, _, _, blockEditor ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = blockEditor.RichText;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'example-blocks/pros-cons', {
		title: 'Pros / Cons',
		icon: 'index-card',
		category: 'layout',
		attributes: {
			pros: {
				type: 'array',
				source: 'children',
				selector: '.pros',
			},
			cons: {
				type: 'array',
				source: 'children',
				selector: '.cons',
			},
		},

		example: {
			attributes: {
				pros: [
					{ type: 'li', props: { children: [ 'First pros...' ] } },
					{ type: 'li', props: { children: [ 'Second pros...' ] } },
				],
				cons: [
					{ type: 'li', props: { children: [ 'First cons...' ] } },
					{ type: 'li', props: { children: [ 'Second pros...' ] } },
				],
			},
		},

		edit: function ( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				useBlockProps( { className: props.className } ),
				el( 'h3', {}, 'Pros:' ),
				el( RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: 'Write a list of pros…',
					value: attributes.pros,
					onChange: function ( value ) {
						props.setAttributes( { pros: value } );
					},
					className: 'pros',
				} ),
				el( 'h3', {}, 'Cons:' ),
				el( RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: 'Write a list of cons…',
					value: attributes.cons,
					onChange: function ( value ) {
						props.setAttributes( { cons: value } );
					},
				} )
			);
		},
		save: function ( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				useBlockProps.save( { className: props.className } ),
				el(	'div',
					{ className: 'row' },
					el(	'div',
						{ className: 'col-md-4 offset-md-1' },
						el(	'div',
							{ className: 'pros-cons' },
							el(	'div',
								{ className: 'pros-cons-text' },
								el( 'h3', {}, 'PROS' ),
								el( RichText.Content, {
									tagName: 'ul',
									className: 'pros',
									value: attributes.pros,
								} ),
							)
						)
					),
					el(	'div',
						{ className: 'col-md-4 offset-md-2' },
						el(	'div',
							{ className: 'pros-cons cons' },
							el(	'div',
								{ className: 'pros-cons-text' },
								el( 'h3', {}, 'CONS' ),
								el( RichText.Content, {
									tagName: 'ul',
									className: 'cons',
									value: attributes.cons,
								} ),
							)
						)
					),
				),
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
	window.wp.blockEditor
);
