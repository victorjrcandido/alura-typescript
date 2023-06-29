export abstract class View<T> {
    protected element: HTMLElement;
    private escape = false;

    constructor(selector: string, escape?: boolean) {
        if (escape) {
            this.escape = escape;
        }
        this.element = document.querySelector(selector);
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }

        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string
}