---
layout: page
title: Attention-Aware DPO for Reducing Hallucinations in Multi-Image QA
description: We introduce an attention-aware, multi-image augmented preference alignment method that improves accuracy by 8.5%, and further enhance inference-time alignment through adaptive attention scaling, yielding a 10% performance gain over the base model.
img: assets/img/1_llvm_project/fig2.png
importance: 1
category: research

related_publications: false
---

<p class="text-center mb-2" style="font-size: 1.5rem; font-weight: bold;">
  <a href="/assets/pdf/LLVM_Project.pdf" target="_blank" style="color: #007bff;">[Report]</a>
  <a href="https://github.com/harsh-sutariya/AA-DPO" target="_blank" style="color: #007bff; margin-left: 5px;">[Code]</a>
  <a href="https://docs.google.com/presentation/d/1qn734NlQ_3vAQipWnSy288292A3fggcfwN5SpMCmTzw/edit?slide=id.g352a0262b55_0_340#slide=id.g352a0262b55_0_340" target="_blank" style="color: #007bff; margin-left: 5px;">[Slides]</a>
</p>

<h2>Project Summary</h2>

<p>
This project explores hallucination reduction in Large Vision-Language Models (LVLMs) when answering queries over multiple images. We propose Attention-aware Direct Preference Optimization (AA-DPO) and extend AdaptVis for inference-time optimization, achieving performance improvements in both alignment and answer quality.
</p>

<h3>1. Introduction</h3>
<p>
LVLMs excel at single-image reasoning, but multi-image tasks expose alignment flaws. We augment Direct Preference Optimization (DPO) with attention-aware penalties to discourage incorrect image focus. Our method improves accuracy by 8.5% and further by 10% using AdaptVis-based inference.
</p>
<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/1_llvm_project/fig1.png" title="Figure 1: Multi-image hallucination example" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Model improves target image attention post fine-tuning.</div>

<h3>2. Related Work</h3>
<p>
Prior work mitigates hallucinations via preference learning (e.g., PPO, DPO) or contrastive/inference-time decoding. However, most approaches focus on single-image scenarios. Our method introduces an explicit attention-based training signal for multi-image QA.
</p>

<h3>3. Method</h3>
<p>
We modify the Direct Preference Optimization (DPO) loss to incorporate an attention penalty that discourages misallocated focus on irrelevant images. Specifically, the loss function combines:
</p>

<ul>
  <li><strong>LDPO:</strong> Encourages higher probability for preferred answers</li>
  <li><strong>Lattn:</strong> Penalizes low attention on the correct image</li>
</ul>

<p>
The final objective is: <code>Ltotal = LDPO + λ × Lattn</code>, with attention weights extracted from decoder layers 14 to 22. These layers consistently show high focus on the target image.
</p>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/fig2.png" title="Figure 2: AA-DPO Pipeline Overview" class="img-fluid rounded" %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/fig3.png" title="Figure 3: Layer-wise attention ratio" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">Top: Training pipeline overview. Bottom: Layers 14–22 show strongest attention to target image.</div>

<h4>Inference-Time Optimization</h4>
<p>
At inference, we extend <strong>AdaptVis</strong>, which scales attention scores based on model confidence. High confidence leads to sharper focus on visual tokens; low confidence causes smoothing to reduce overcommitment to incorrect regions.
</p>

<h4>Evaluation Strategy</h4>
<p>
To assess performance, we use the <strong>PixMo dataset</strong>, covering Sequence, Collage, and Pic-in-Pic scenarios. Each format includes 500 queries with 2–8 images. We evaluate models using a rubric scored by a strong LLM (Gemini, 2025) on:
</p>

<ul>
  <li><strong>Relevance</strong>: Does the answer directly address the question?</li>
  <li><strong>Accuracy</strong>: Is the response factually correct?</li>
  <li><strong>Clarity</strong>: Is the answer coherent and unambiguous?</li>
  <li><strong>Completeness</strong>: Does the answer cover all necessary information?</li>
</ul>

<p>
We prompted the LLM with a carefully crafted rubric (shown below) to ensure consistent, interpretable evaluations.
</p>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/figA1.png" title="Figure A1: LLM Evaluation Prompt" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">Evaluation prompt used for LLM-as-a-Judge scoring on relevance, accuracy, clarity, and completeness.</div>

<h3>4. Results</h3>
<p>
We evaluate on PixMo dataset across Sequence, Collage, and Pic-in-Pic formats. Metrics include Relevance, Accuracy, Clarity, and Completeness (1–5 scale), as judged by a strong LLM.
</p>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/tab1.png" title="Table 1: Combined Rubric Scores" class="img-fluid rounded " %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/tab2.png" title="Table 2: Accuracy Scores" class="img-fluid rounded " %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/1_llvm_project/tab3.png" title="Table 3: Attention Ratios" class="img-fluid rounded " %}
  </div>
</div>
<div class="caption">Our method (w/ AdaptVis) achieves top scores across all evaluation metrics.</div>

<p>
AA-DPO improves average accuracy to 3.20 (from 2.95 baseline), with attention ratios better aligned to target images. With AdaptVis, performance improves further, especially on ambiguous visual compositions.
</p>

<h3>5. Conclusion</h3>
<p>
Our pipeline enhances LVLM alignment for multi-image inputs by integrating attention penalties into training. Future directions include benchmarking on complex datasets like MANTIS and exploring attention-based loss variants. A difficulty-tiered benchmark using CLIP embeddings is also proposed.
</p>

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/1_llvm_project/figA2.jpg" title="Figure A2: Qualitative Example 1" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/1_llvm_project/figA3.jpg" title="Figure A3: Qualitative Example 2" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Side-by-side output comparison between baseline, MIA-DPO, and our method. Our method attends the correct image carefully thereby providing more precise fine-grained captions</div>
