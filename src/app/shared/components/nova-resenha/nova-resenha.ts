import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResenhasService } from '../../../services/resenhas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nova-resenha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nova-resenha.html',
  styleUrl: './nova-resenha.css',
})
export class NovaResenha {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resenhasService: ResenhasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      tipo: ['livro', Validators.required],
      nota: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      genero: [''],
      descricao: [''],
      resenha: [''],
      imagemUrl: ['']
    });
  }

  salvar() {
    if (this.form.invalid) return;

    const nova = {
      id: Date.now(),
      ...this.form.value
    };

    this.resenhasService.adicionarResenha(nova);
    this.router.navigate(['/']);
  }

  preview: string | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.preview = reader.result as string;
      this.form.patchValue({
        imagemUrl: this.preview
      });
    };

    reader.readAsDataURL(file);
  }
}
