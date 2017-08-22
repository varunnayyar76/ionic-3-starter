import { Animation, PageTransition } from 'ionic-angular';

export class ModalFadeInEnterTransition extends PageTransition {
public init() {
	const ele = this.enteringView.pageRef().nativeElement;
	const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

	wrapper.beforeStyles({'transform': 'scale(1)' ,'opacity': 0 });
	wrapper.fromTo('transform', 'scale(1)', 'scale(1.0)');
	wrapper.fromTo('opacity', 0, 1);

	this
		.element(this.enteringView.pageRef())
		.duration(2000)
		.easing('cubic-bezier(.1, .7, .1, 1)')
		.add(wrapper);
	}
}