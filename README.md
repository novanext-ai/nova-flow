# Nova Flow

**Dictée vocale IA, 100 % locale, 100 % gratuite.** Appuie sur une touche, parle, ton texte apparaît dans n'importe quelle application. Rien ne quitte ton ordinateur.

Nova Flow est l'alternative libre aux applications de dictée par abonnement (Wispr Flow, Superwhisper, etc.) : mêmes usages, zéro cloud, zéro abonnement, sur tous tes ordinateurs.

Développé par [Novanext](https://novanext.ai), sur la base du projet open source [Handy](https://github.com/cjpais/Handy) de CJ Pais (licence MIT), que nous remercions.

## Fonctionnalités

- **Dictée universelle** : push-to-talk ou mode toggle, le texte est collé directement dans l'app active (email, WhatsApp, terminal, Claude Code, IDE...)
- **100 % local** : transcription sur ta machine avec Whisper (whisper.cpp) ou NVIDIA Parakeet v3, accéléré GPU (Metal sur Mac). Aucune donnée envoyée dans le cloud.
- **Français excellent** : Parakeet v3 (25 langues européennes) et Whisper multilingue, ponctuation automatique
- **Nettoyage IA optionnel** : branche n'importe quel endpoint compatible OpenAI pour reformuler ta dictée : Ollama (local, gratuit), Mistral, Groq...
- **Dictionnaire personnel** : tes mots techniques, noms propres et jargon métier
- **Historique** des dictées, overlay d'enregistrement, filtre de silence (VAD Silero)
- **Multi-plateforme** : macOS (Apple Silicon + Intel), Windows, Linux
- **Interface en français** (et 20+ autres langues)

## Installation

### macOS

Télécharge le `.dmg` depuis les [Releases](https://github.com/novanext-ai/nova-flow/releases), ouvre-le et glisse Nova Flow dans Applications.

L'app n'est pas notariée Apple (projet communautaire gratuit) : au premier lancement, clic droit sur l'app → **Ouvrir**, ou exécute :

```bash
xattr -dr com.apple.quarantine "/Applications/Nova Flow.app"
```

Accorde ensuite les permissions **Microphone** et **Accessibilité** demandées (nécessaires pour dicter et coller le texte).

### Compiler depuis les sources

Prérequis : [Rust](https://rustup.rs/) (stable), [Bun](https://bun.sh/), et sous macOS les Xcode Command Line Tools.

```bash
git clone https://github.com/novanext-ai/nova-flow.git
cd nova-flow
bun install
bun run tauri build   # ou "bun run tauri dev" pour développer
```

Détails par plateforme (Windows, Linux, Intel Mac) : voir [BUILD.md](BUILD.md).

## Démarrage rapide

1. Lance Nova Flow, suis l'onboarding (permissions + téléchargement d'un modèle)
2. Modèle recommandé : **Parakeet v3** (rapide, français inclus). Alternative qualité max : Whisper Large v3 Turbo
3. Configure ton raccourci (par exemple la touche Fn ou une touche latérale de souris)
4. Dicte dans n'importe quelle app. C'est tout.

### Nettoyage IA (optionnel)

Dans les réglages, section post-traitement, ajoute un endpoint compatible OpenAI :

- **Ollama** (gratuit, local) : `http://localhost:11434/v1` avec un petit modèle (qwen2.5:3b, mistral)
- **Mistral API** : `https://api.mistral.ai/v1` avec ta clé
- **Groq** : `https://api.groq.com/openai/v1` avec ta clé

## Vie privée

- L'audio est capté, transcrit et supprimé **sur ta machine**
- Aucun compte, aucun tracking, aucune télémétrie
- Les modèles sont téléchargés une fois puis fonctionnent hors ligne

## Crédits et licence

Nova Flow est un fork de [Handy](https://github.com/cjpais/Handy) par CJ Pais, dont nous saluons le travail. Merci également aux projets [whisper.cpp](https://github.com/ggerganov/whisper.cpp), [Silero VAD](https://github.com/snakers4/silero-vad) et [NVIDIA Parakeet](https://huggingface.co/nvidia).

Licence [MIT](LICENSE). Vous pouvez utiliser, modifier et redistribuer Nova Flow librement, y compris commercialement.

---

# Nova Flow (English)

**Free, 100% local AI dictation.** Press a key, speak, and your words appear in any app. Nothing ever leaves your computer.

Nova Flow is the free, open-source alternative to subscription dictation apps. Local transcription with Whisper / NVIDIA Parakeet v3 (Metal-accelerated on Mac), optional AI cleanup through any OpenAI-compatible endpoint (Ollama, Mistral, Groq), personal dictionary, history, French-first but supports 20+ UI languages and 25+ transcription languages.

Built by [Novanext](https://novanext.ai) on top of [Handy](https://github.com/cjpais/Handy) by CJ Pais (MIT). Install from [Releases](https://github.com/novanext-ai/nova-flow/releases) or build from source with Rust + Bun (`bun install && bun run tauri build`).
