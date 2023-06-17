import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

  private element: HTMLElement;
  
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(): string {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `
  }

    update(model: Negociacoes): void {
      this.element.innerHTML = this.template();
    }

}